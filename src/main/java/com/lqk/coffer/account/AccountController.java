package com.lqk.coffer.account;

import com.lqk.coffer.context.GlobalContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpSession;

/**
 * @author lqk
 * @Date 2020/11/9
 * @Description
 */
@Controller
public class AccountController {

    @Autowired
    private AccountService accountService;

    @GetMapping({"", "toLogin"})
    public String login() {
        return "login";
    }

    /**
     * 登录，把账户ID存入 Session 域
     * @param inputPhoneNumber 电话号码
     * @param inputPassword 密码
     * @param session session
     * @return
     */
    @ResponseBody
    @RequestMapping(value = "login", method = RequestMethod.POST)
    public boolean login(String inputPhoneNumber, String inputPassword, HttpSession session) {
        Account account = accountService.selectAccount(inputPhoneNumber, inputPassword);
        if (account == null) {
            return false;
        }
        session.setAttribute("accountId", account.getAccountId());
        return true;
    }


    @ResponseBody
    @RequestMapping(value = "register", method = RequestMethod.POST)
    public String register(String inputPhoneNumber, String inputPassword){
        Account account = GlobalContext.applicationContext.getBean(Account.class);
        account.build(inputPhoneNumber, inputPassword);
        Boolean exist = accountService.existAccount(inputPhoneNumber);
        if(exist){
            return "电话号码已经存在!";
        }
        int insertAccount = accountService.insertAccount(account);
        return "success";
    }
}
