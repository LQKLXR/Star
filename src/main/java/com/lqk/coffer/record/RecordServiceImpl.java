package com.lqk.coffer.record;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author lqk
 * @Date 2020/11/8
 * @Description
 */
@Service
public class RecordServiceImpl implements RecordService{

    @Autowired
    private RecordMapper recordMapper;

    @Override
    public int insertRecord(Record record) {
        return recordMapper.insertRecord(record);
    }

    @Override
    public List<Record> selectAllRecord(Integer accountId) {
        return recordMapper.selectAllRecord(accountId);
    }

    @Override
    public List<Record> selectRecordByAssetId(Integer accountId, Integer assetId) {
        return recordMapper.selectRecordByAssetId(accountId, assetId);
    }

}
