package com.lqk.coffer.account;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @author lqk
 * @Date 2020/11/9
 * @Description
 */
@Service
public class AccountServiceImpl implements AccountService{

    @Autowired
    private AccountMapper accountMapper;

    @Override
    public int insertAccount(Account account) {
        return accountMapper.insertAccount(account);
    }

    @Override
    public Account selectAccount(String phoneNumber, String password) {
        return accountMapper.selectAccount(phoneNumber, password);
    }

    @Override
    public Boolean existAccount(String phoneNumber) {
        return accountMapper.existAccount(phoneNumber);
    }
}
