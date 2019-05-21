/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
const helper = require('./helper.js');

function safeCycles() {
  const seen = [];
  function guardCycles(_, v) {
    if (!v || typeof (v) !== 'object') {
      return (v);
    }
    if (seen.indexOf(v) !== -1) {
      return ('[Circular]');
    }
    seen.push(v);
    return (v);
  }
  return guardCycles;
}

module.exports.pre = (context, action) => {
  context.request.headers.authorization = 'xxx';
  context.content.request = JSON.stringify(context.request, null, '  ');
  context.content.action = JSON.stringify(action, safeCycles(), '  ');
};

module.exports.after = {
  html: (context) => {
    return {
      response: {
        headers: {
          'Cache-Control': 'private',
        }
      }
    };
  }
};
