/*!
 * SPDX-FileCopyrightText: © 2021 François Zaninotto <https://marmelab.com/blog/2021/07/22/cra-webpack-no-eject.html>
 * SPDX-License-Identifier: CC0-1.0
 */

// in ./build.js
const rewire = require('rewire');
const defaults = rewire('node_modules/react-scripts/scripts/build.js');
const config = defaults.__get__('config');

/**
 * Do not mangle component names in production, for a better learning experience
 * @link https://kentcdodds.com/blog/profile-a-react-app-for-performance#disable-function-name-mangling
 */
config.optimization.minimizer[0].options.terserOptions.format.comments = '/^\**!';
config.optimization.minimizer[0].options.terserOptions.extractComments = false;
