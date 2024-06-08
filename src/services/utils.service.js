const { User, SiteModel } = require('../models');

/**
 * Create a user
 * @param {Object} site
 * @returns {Promise<Site>}
 */
const createSiteValidity = async (name, isActive) => {
  return SiteModel.findOneAndUpdate(
    { name },
    { name, isActive },
    { new: true, upsert: true } // upsert option creates a new document if no match is found
  );
};
/**
 * Get user by id
 * @param {ObjectId} siteName
 * @returns {Promise<Site>}
 */
const getSiteValidity = async (siteName) => {
  return SiteModel.findOne({ name: siteName });
};
/**
 * Query for users
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryUsers = async (filter, options) => {
  const users = await User.paginate(filter, options);
  return users;
};

/**
 * Get user by email
 * @param {string} email
 * @returns {Promise<User>}
 */
const getUserByEmail = async (email) => {
  return User.findOne({ email });
};

module.exports = {
  createSiteValidity,
  getSiteValidity,
  queryUsers,
  getUserByEmail,
};
