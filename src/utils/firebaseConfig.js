/*
 *  Links List - Create a list of links, and then share it!
 *  Copyright (c) 2019 Luke Denton
 *
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation; either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import appConfig from '../../application-configuration';

/**
 * @typedef {Object} FirebaseConfig
 * @property {string} apiKey
 * @property {string} authDomain
 * @property {string} databaseURL
 * @property {string} projectId
 * @property {string} appId
 */

/**
 * Get the appropriate firebase config information, depending on whether live or local dev
 *
 * @returns {FirebaseConfig}
 */
function firebaseConfig() {
  if (location.hostname === 'localhost') {
    return appConfig.firebaseDev;
  }

  return appConfig.firebase;
}

export default firebaseConfig();
