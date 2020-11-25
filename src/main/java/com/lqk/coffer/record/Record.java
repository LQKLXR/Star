package com.lqk.coffer.record;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import java.math.BigDecimal;
import java.sql.Date;
import java.sql.Timestamp;

/**
 * @author lqk
 * @Date 2020/11/8
 * @Description 一笔收入/支出记录
 */
@Data
public class Record {

    /**
     * 记录ID
     */
    private Integer recordId;

    /**
     * 此记录类型，1表示收入，2表示支出，3表示转入，4表示转出
     */
    private Integer type;

    /**
     * 此记录关联账户（从何处收 / 付给谁）
     */
    private String linkedAccount;

    /**
     * 数额大小
     */
    private BigDecimal amount;

    /**
     * 原因
     */
    private String reason;

    /**
     * 备注
     */
    private String note;

    /**
     * 记录时间
     */
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss",timezone="GMT+8")
    private Timestamp dateTime;

    /**
     * 关联的资产ID，非外键
     */
    private Integer assetId;

    /**
     * 用户的自增长ID，表示属于哪个用户，外键
     */
    private Integer accountId;


    public void build(Integer type, String linkedAccount, BigDecimal amount, String reason, String note, Timestamp dateTime, Integer assetId, Integer accountId) {
        this.type = type;
        this.linkedAccount = linkedAccount;
        this.amount = amount;
        this.reason = reason;
        this.note = note;
        this.dateTime = dateTime;
        this.assetId = assetId;
        this.accountId = accountId;
    }
}
