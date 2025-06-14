import { ReactElement } from "react";
import ANIM__FadeInOnScroll from "../anims/fadein.anim";

const SectionHead = ({
  highlighter = "Dịch vụ của chúng tôi",
  H2 = <>Giải pháp trọn gói tiết kiệm Thời gian - Chi phí</>,
  paragraphs = [
    <>
      Chúng tôi sẽ lắng nghe mục tiêu <span>của bạn</span> và thực hiện cuộc kiểm toán miễn phí để xem liệu chúng ta có phù hợp để làm việc cùng nhau hay không.
    </>,
  ],
}: {
  highlighter: string;
  H2: ReactElement;
  paragraphs: any;
}) => {
  return (
    <ANIM__FadeInOnScroll className="flex flex-col items-center justify-center small-gap max-w-[566px] mx-auto text-center">
      {highlighter ? (
        <p className="text-[12px] md:text-[16px] text-purple-800 font-semibold inline-block px-4 py-[4px] rounded-full border border-primary/20">
          {highlighter}
        </p>
      ) : null}
      {H2 ? (
        <h2 className="text-primary [&>span]: text-purple-800">{H2}</h2>
      ) : null}
      {paragraphs.length
        ? paragraphs.map((item: any, index: number) => {
            return (
              <p
                key={index}
                className="[&>span]:font-medium [&>span]:text-primary text-primary/80"
              >
                {item}
              </p>
            );
          })
        : null}
    </ANIM__FadeInOnScroll>
  );
};

export default SectionHead;
