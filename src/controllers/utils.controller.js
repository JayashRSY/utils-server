const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { utilsService } = require('../services');

const createSiteValidity = catchAsync(async (req, res) => {
  const { name, isActive } = req.body;
  const site = await utilsService.createSiteValidity(name, isActive);
  res.status(httpStatus.CREATED).send(site);
});

const getSiteValidity = catchAsync(async (req, res) => {
  try {
    const { name } = req.body;
    const site = await utilsService.getSiteValidity(name);
    if (site && site.isActive) {
      res.send(true);
    } else {
      res.send(false);
    }
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = {
  createSiteValidity,
  getSiteValidity,
};
