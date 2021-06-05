import 'css-doodle';

const Doodle = () => {
    return (
        <css-doodle click-to-update>{`
        :doodle {
            @grid: 1 / 100vw 100vh;
            @size: 100%;
            z-index: -1;
        }
        background-size: 84px 200px;
        background-color: #FFF;
        background-image: @doodle(
            @grid: 2 / 100%;
            background: @pn(#F5F5F5, #E8E8E8);
            transform-origin: @pn(100% 100%, 0 100%, 100% 0, 0 0);
            transform: rotateX(45deg) skewY(@pn(34deg, -34deg, -34deg));
        );
    `}</css-doodle>
    );
};
export default Doodle;