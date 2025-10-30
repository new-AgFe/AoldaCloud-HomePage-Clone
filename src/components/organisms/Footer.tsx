// src/components/organisms/Header.tsx
import LinkItem from '../atoms/LinkItem';

const Footer = () => {
    return (
        <footer>
            {/* ... 다른 UI 요소 */}
            <LinkItem theme="primary" to='/login'>로그인</LinkItem>
        </footer>
    );
};

export default Footer;