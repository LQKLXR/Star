package com.lqk.coffer.asset;

import lombok.Data;

import java.math.BigDecimal;
import java.sql.Timestamp;

/**
 * @author lqk
 * @Date 2020/11/8
 * @Description
 */
@Data
public class Asset {

    /**
     * 资金ID
     */
    private Integer assetId;

    /**
     * 资金类型名称
     */
    private String name;

    /**
     * 资金数额
     */
    private BigDecimal amount;

    /**
     * 备注
     */
    private String note;

    /**
     * 创建时间
     */
    private Timestamp createTime;

    /**
     * 账户ID
     */
    private Integer accountId;

}
