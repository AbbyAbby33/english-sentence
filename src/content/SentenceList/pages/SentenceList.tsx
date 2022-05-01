import * as React from 'react';
import PageTitle from '../../../shared/components/PageTitle';
import PatternCard from '../components/PatternCard';

export default function SentenceList() {

    const PATTERN_LIST = [
        {
            id: 'p0000', englishPattern: 'Is this...?', chinesePattern: '請問是...？', list: [
                { id: 's0000', englishSentence: 'Is this Mr. Wang?', chineseSentence: '請問是王先生嗎？' },
                { id: 's0001', englishSentence: 'Is this the front desk?', chineseSentence: '請問是服務台嗎？' }
            ]
        },
        {
            id: 'p0001', englishPattern: 'This is...speaking.', chinesePattern: '是...接聽。', list: [
                { id: 's0002', englishSentence: 'This is he/she.', chineseSentence: '我就是。' },
                { id: 's0003', englishSentence: 'This is Vicky speaking.', chineseSentence: '我是Vicky。' }
            ]
        },
        {
            id: 'p0002', englishPattern: 'This is a call from...', chinesePattern: '是...打來的。', list: [
                { id: 's0004', englishSentence: 'This is a call from Ms. Chen.', chineseSentence: '陳小姐來電。' },
                { id: 's0005', englishSentence: 'This is a call from you client.', chineseSentence: '你的客戶來電。' },
                { id: 's0006', englishSentence: 'This is a call from Singapore.', chineseSentence: '這是從新加坡打來的電話。' },
                { id: 's0007', englishSentence: 'This is a call from the manager.', chineseSentence: '這是經理的來電。' }
            ]
        },
        {
            id: 'p9999', englishPattern: 'Other', chinesePattern: '其他', list: [
                { id: 's0008', englishSentence: "I think you've dialed the wrong number.", chineseSentence: '我想你打錯電話了' }
            ]
        },
    ];

    return (
        <React.Fragment>
            <PageTitle title='句型' />
            {PATTERN_LIST.map(v => {
                return (
                    <PatternCard
                        key={v.id}
                        id={v.id}
                        englishPattern={v.englishPattern}
                        chinesePattern={v.chinesePattern}
                        list={v.list} />
                )
            })}
        </React.Fragment>
    )
}
