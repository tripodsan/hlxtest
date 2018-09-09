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


const KEYS_TO_REMOVE = ['position'];

function removePosition(node) {
  if (node && typeof node === 'object') {
    const keys = Object.keys(node);
    keys.forEach((k) => {
      if (KEYS_TO_REMOVE.indexOf(k) !== -1) {
        delete node[k];
      } else {
        removePosition(node[k]);
      }
    });
  }
}

module.exports.pre = (payload) => {
  const p = payload;

  removePosition(p.resource.mdast);
  removePosition(p.resource.htast);

  delete p.resource.body;
  delete p.resource.html;

  p.json = JSON.stringify(p);

};
