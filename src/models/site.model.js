const mongoose = require('mongoose');

const siteSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);
/**
 * @typedef SiteModel
 */
const SiteModel = mongoose.model('Site', siteSchema);

module.exports = SiteModel;
