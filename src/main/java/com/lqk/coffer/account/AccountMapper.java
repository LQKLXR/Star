package com.lqk.coffer.account;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

/**
 * @author lqk
 * @Date 2020/11/9
 * @Description
 */
@Mapper
@Repository
public interface AccountMapper {

    /**
     * 新建帐号
     * @param account
     * @return
     */
    public int insertAccount(Account account);

    /**
     * 根据手机号和密码查找帐号
     * @param phoneNumber 查找的手机号
     * @param password 查找的密码
     * @return
     */
    public Account selectAccount(@Param("phoneNumber") String phoneNumber, @Param("password") String password);


    /**
     * 是否已经存在该手机号
     * @param phoneNumber 要查询的手机号
     * @return true:已经存在, false:不存在
     */
    public Boolean existAccount(String phoneNumber);
}
