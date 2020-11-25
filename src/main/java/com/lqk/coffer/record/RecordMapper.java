package com.lqk.coffer.record;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * @author lqk
 * @Date 2020/11/8
 * @Description
 */
@Mapper
@Repository
public interface RecordMapper {

    /**
     * 插入一条新的记录
     * @param record
     * @return
     */
    public int insertRecord(Record record);

    /**
     * 查找该帐号所有的记录
     * @param accountId 帐号ID
     * @return
     */
    public List<Record> selectAllRecord(Integer accountId);

    /**
     * 查找该帐号下该资产里的所有的记录
     * @param accountId
     * @param assetId
     * @return
     */
    public List<Record> selectRecordByAssetId(@Param("accountId") Integer accountId, @Param("assetId") Integer assetId);

}
