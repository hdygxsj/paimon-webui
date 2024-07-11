/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package org.apache.paimon.web.server.data.model;

import org.apache.paimon.web.server.constant.Constants;
import org.apache.paimon.web.server.data.enums.UserType;
import org.apache.paimon.web.server.validator.annotation.PhoneNumber;

import com.baomidou.mybatisplus.annotation.TableField;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;

/** user table model. */
@Data
@EqualsAndHashCode(callSuper = true)
public class User extends BaseModel {

    private static final long serialVersionUID = 1L;

    /** username. */
    @NotBlank(message = "invalid.username")
    private String username;

    /** password. */
    private String password;

    /** nickname. */
    private String nickname;

    /** login type (0:LOCAL,1:LDAP). */
    private UserType userType;

    /** mobile phone. */
    @PhoneNumber private String mobile;

    /** email. */
    @Email(message = "invalid.email.format")
    private String email;

    /** is enable. */
    private Boolean enabled;

    /** avatar url. */
    private String url;

    /** role ids. */
    @TableField(exist = false)
    @NotEmpty(message = "invalid.roleIds")
    private Integer[] roleIds;

    public boolean isAdmin() {
        return isAdmin(this.getId());
    }

    public static boolean isAdmin(Integer userId) {
        return userId != null && Constants.ADMIN_ID == userId;
    }
}
