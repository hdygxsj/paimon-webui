/* Licensed to the Apache Software Foundation (ASF) under one
or more contributor license agreements.  See the NOTICE file
distributed with this work for additional information
regarding copyright ownership.  The ASF licenses this file
to you under the Apache License, Version 2.0 (the
"License"); you may not use this file except in compliance
with the License.  You may obtain a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing,
software distributed under the License is distributed on an
"AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, either express or implied.  See the License for the
specific language governing permissions and limitations
under the License. */

import httpRequest from '../../request'
import type { LoginOptions } from './types/login_options'
import type { ResponseOptions } from '@/api/types'

// #region login-controller

/**
 * # Login
 * @params {LoginOptions} options
 */
export function onLogin(params: LoginOptions) {
  return httpRequest.post<LoginOptions, ResponseOptions<any>>('/login', params)
}

/**
 * # Logout
 */
export function onLogout() {
  return httpRequest.post<ResponseOptions<any>>('/logout')
}

// #endregion
