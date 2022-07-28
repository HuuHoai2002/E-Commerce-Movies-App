import styled from "styled-components";
import { Image } from "../../components/image";
import { Grid } from "../components/grid";
import { footerContent, footerInfo } from "./content";

const FooterStyles = styled.div`
  width: 100%;
  padding-bottom: 16px;
`;

const Footer = () => {
  return (
    <div className="footer">
      <FooterStyles>
        <div className="footer-content py-5 bg-[#fafafa]">
          <div className=" max-w-[1360px] mx-auto">
            <Grid col="4">
              {footerContent.map((item) => (
                <div
                  className="flex items-center flex-col gap-y-3 justify-center cursor-pointer"
                  key={item.id}>
                  <Image src={item.imageUrl} className="w-[130px] h-[88px]" />
                  <span className="font-medium text-ctext text-sm">
                    {item.content}
                  </span>
                </div>
              ))}
            </Grid>
          </div>
        </div>
        <div className="footer-info py-5 bg-white">
          <div className="max-w-[1360px] mx-auto px-[60px] py-5">
            <Grid col="4">
              {footerInfo.map((item) => (
                <div className="flex flex-col gap-y-2" key={item.id}>
                  <span className="font-medium text-black">{item.title}</span>
                  {item.content.map((children) => (
                    <div className="leading-3" key={children.id}>
                      <span className="inline-block leading-4 text-ctext text-sm cursor-pointer hover:opacity-80 transition-all">
                        {children.name}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </Grid>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="flex items-center justify-center gap-x-1 leading-none font-medium pt-4">
            <span>Bản quyền thuộc về</span>
            <span className="text-cblue">Tiki.vn</span>
            <span>
              From
              <strong className="text-cprice mx-1">
                <a
                  href="https://www.facebook.com/nhh.511/"
                  target="_blank"
                  rel="noreferrer">
                  Hữu Hoài
                </a>
              </strong>
              with love 😍😍
            </span>
          </div>
        </div>
      </FooterStyles>
    </div>
  );
};

export default Footer;
