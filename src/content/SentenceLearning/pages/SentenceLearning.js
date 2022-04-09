import Topic from '../components/Topic';
import styled from '@emotion/styled';

export default function SentenceLearning() {

    const TOPIC_LIST = [
        {id: 't0000', name: '打招呼'},
        {id: 't0001', name: '邀請'},
        {id: 't0002', name: '道別'},
        {id: 't0003', name: '接聽電話'},
        {id: 't0004', name: '預約'},
        {id: 't0005', name: '商業用語'},
        {id: 't0006', name: '財務'},
        {id: 't0007', name: '工作'},
        {id: 't0008', name: '道歉'},
        {id: 't0009', name: '談判'},
        {id: 't0010', name: '開會'},
        {id: 't0011', name: '議題搞論'},
        {id: 't0012', name: '表達意見'},
    ];

    const Title = styled.h1`
                        text-align: center;
                        margin: 0 0 15px;
                    `
    
    return (
        <div>
            <Title>主題</Title>
            {TOPIC_LIST.map(v => {
                return <Topic key={v.id} {...v}></Topic>
            })}
        </div>

    )
}
