package com.lqk.coffer.account;

import lombok.Data;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

/**
 * @author lqk
 * @Date 2020/11/8
 * @Description 登录的账户
 */
@Data
@Component
@Scope("prototype")
public class Account {

    /**
     * 数据库生成的自增ID
     */
    private Integer accountId;

    /**
     * 登录用的手机号
     */
    private String phoneNumber;

    /**
     * 登录所用的密码
     */
    private String password;

    public void build(String phoneNumber, String password) {
        this.phoneNumber = phoneNumber;
        this.password = password;
    }
}
