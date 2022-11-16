import { useEffect } from 'react';
import 'css-doodle';

export default function Doodle() {
    useEffect(() => {
        setInterval(() => {
            const doodle: any = document.queryCommandSupported('css-doodle');
            if (doodle) doodle.update();
        }, 200);
    }, []);

    return (
        <css-doodle click-to-update>{`
        :doodle {
            @grid: 10x10;
            @size: 100%;

            z-index: -1;
            overflow: hidden;
        }

        @random { border-top: 1px solid #D3D3D3; }
        @random { border-left: 1px solid #D3D3D3; }
        @random(.2) {
            :after {
                content: '';
                background: hsl(@rand(360), 60%, 70%);
                @size: @rand(3px);
            }
        }
    `}</css-doodle>
    );
};