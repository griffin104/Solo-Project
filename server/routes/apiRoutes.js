import express from 'express'

import teamsController from '../controllers/teamsControllers.js'

const router = express.Router()

router.route('/teams')
  .get(teamsController.getTeams, (req, res) => {
    res.json(res.locals.teams)
  })
  .put(teamsController.saveTeam, (req, res) => {
    res.send('Post successful')
  })
  .delete(teamsController.deleteTeam, (req, res) => {
    res.send('Delete successful')
  })


export default router