package com.lqk.coffer.record;

import com.lqk.coffer.asset.AssetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;
import java.sql.Timestamp;
import java.util.List;

/**
 * @author lqk
 * @Date 2020/11/20
 * @Description
 */
@RestController
public class RecordController {

    @Autowired
    private RecordService recordService;
    @Autowired
    private AssetService assetService;

    /**
     * 插入一个新的流水记录到当前用户
     * @param record 插入的记录
     * @param session
     * @return
     */
    @RequestMapping(value = "/insertRecord",method = RequestMethod.POST)
    public String insertRecord(@RequestBody Record record, HttpSession session){
        //更改余额
        assetService.changeAmount(record.getAmount(), record.getAssetId());
        //生成记录
        Integer accountId = (Integer) session.getAttribute("accountId");
        record.setAccountId(accountId);
        record.setDateTime(new Timestamp(System.currentTimeMillis()));
        recordService.insertRecord(record);
        return "success";
    }

    /**
     * 获取当前用户的全部记录
     * @param session
     * @return
     */
    @RequestMapping(value = "/getAllRecord")
    public List<Record> getAllRecord(HttpSession session){
        Integer accountId = (Integer) session.getAttribute("accountId");
        List<Record> recordList = recordService.selectAllRecord(accountId);
        return recordList;
    }

}
