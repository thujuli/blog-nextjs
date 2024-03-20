import ArticleSidebar from "@/components/ArticleSidebar";
import Container from "@/components/Container";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const ArticleLayout: React.FC<Props> = (props) => {
  const { children } = props;
  return (
    <section className="pt-32">
      <Container>
        <div className="flex">
          <div className="flex-0 px-10 border-r-2">
            <ArticleSidebar />
          </div>
          <div className="flex-1 px-10">{children}</div>
        </div>
      </Container>
    </section>
  );
};

export default ArticleLayout;
