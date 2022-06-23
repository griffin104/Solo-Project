import Team from '../models/teamsModel.js'

export default {
  getTeams: async (req, res, next) => {
    try {
      const teams = await Team.find({})
      res.locals.teams = teams
      next()
    } catch(err) {
      next({ message: 'Mongo error in getTeams', err})
    }
  },

  saveTeam: async (req, res, next) => {
    const { name, team } = req.body
    if (!Array.isArray(team) || !name) next({ message: 'Invalid body' })
    try {
      await Team.updateOne({name}, {name, team}, {upsert: true})
      next()
    } catch (err) {
      next({ message: 'Mongo error in saveTeam', err})
    }
  },

  deleteTeam: async (req, res, next) => {
    const { name } = req.body
    try {
      await Team.deleteOne({name})
      next()
    } catch(err) {
      next({ message: 'Mongo error in deleteTeam', err})
    }
  }
}
