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

import { KeepAlive } from 'vue'
import styles from './index.module.scss'
import Slider from './components/slider'

export default defineComponent({
  name: 'PlaygroundPage',
  setup() { },
  render() {
    return (
      <div class={styles.container}>
        <Slider />
        <div class={styles.content}>
          <router-view v-slots={{
            default: (props: any) => {
              const Comp = props.Component
              return (
                <KeepAlive>
                  <Comp />
                </KeepAlive>
              )
            },
          }}
          />
        </div>
      </div>
    )
  },
})
