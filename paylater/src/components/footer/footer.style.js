import styled from 'styled-components';

const FooterWrapper = styled.div`
    .footerBack {
        background: ${props => props.footerTheme.backgroundColor};
        padding: 4px 10px;
        color: ${props => props.footerTheme.textColor};
        font-size: 14px;
        font-weight: 600;
        margin-left: -${props => (props.themeSetting.footerAlignValue === 'above' && !props.mini) ? 
        props.drawerWidth :  
        (props.themeSetting.footerAlignValue === 'above' && props.mini) ? 
        props.miniDrawerWidth === props.drawerWidth ? '80px': props.miniDrawerWidth : '0px'
        };
        @media  only screen and (max-width: 767.98px) {
            margin-left : 0px !important;
        }
        @media  only screen and (max-width: 575.98px) {
            font-size: 12px;
            // padding: 17px 10px;
            // display: block;
        };

        .footer-purchase-button {
            @media  only screen and (max-width: 575.98px) {
               span {
                   font-size: 12px !important;
               }
            };
        }
    }
`;

export default FooterWrapper