const express = require('express');
const router = express.Router();

const { isAuthenticated } = require('../middlewares');
const controller = require('./controller');
const prefix = 'issues';

// @TODO: ADD USER ROLES SO THAT NOT EVERYONE CAN READ THE ISSUES

// READ ALL ISSUES
// Desc: Read all issues
// Req: Authenticated
// Role: Admin
router.get(`/${prefix}`, controller.getAllIssues);

// READ ONE ISSUE
// Desc: Read one issue for issue detail view
// Req: Authenticated
// Role: Admin
router.get(`/${prefix}/:issueId`, isAuthenticated, controller.getOneIssue);

// CREATE ONE ISSUE
// Desc: Create one issue
// Req: Authenticated
// Role: User
router.post(`/${prefix}`, controller.createOneIssue);

// UPDATE ONE ISSUE
// Desc: Update information of one issue, specific to a issueId
// Req: Authenticated and IssueId has to match issue making the request
// Role: Admin
router.put(`/${prefix}/:issueId`, isAuthenticated, controller.updateOneIssue);

module.exports = router;
