import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

interface TopicInterface {
    id: string;
    name: string;
    key: string;
}

export default function Topic(props: TopicInterface) {
    const { name, id } = props;

    const Button = styled.div`
                        @media (max-width: 600px) {
                            width: calc(50% - 6px);
                        }
                        @media (min-width: 601px) and (max-width: 900px) {
                            width: calc(25% - 6px);
                        }
                        display: inline-block;
                        color: turquoise;
                        width: calc(12.5% - 6px);
                        background: #333;
                        text-align: center;
                        padding: 10px;
                        box-sizing: border-box;
                        margin: 0 3px 6px;
                        border-radius: 3px;
                    `

    return (
        <NavLink to={`${id}`}>
            <Button>{name}</Button>
        </NavLink>
    )
}
