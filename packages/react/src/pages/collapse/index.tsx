import { useState } from "react";
import type { TName } from "@/components/collapse/types";
import LarkCollapse from "@/components/collapse";
import LarkCollapseItem from "@/components/collapse/item";
import styled from "styled-components";

const Container = styled.div`
  padding: 1.25rem;
  max-width: 42rem;

  h3 {
    margin: 1.25rem 0 0.625rem;
    font-size: 1rem;
    color: #333;
  }

  .meta {
    margin-bottom: 0.75rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: #666;
  }

  .content {
    padding: 0.75rem 0;

    p {
      margin: 0 0 0.5rem;
      font-size: 0.875rem;
      line-height: 1.5rem;
      color: #333;
    }
  }
`;

export default function CollapseDemo() {
  const [activeBasic, setActiveBasic] = useState<TName[]>(["1"]);
  const [activeAccordion, setActiveAccordion] = useState<TName[]>(["a"]);
  const [activeWithDisabled, setActiveWithDisabled] = useState<TName[]>(["x"]);

  const onChange = (names: TName[]) => {
    console.log("[collapse change]", names);
  };

  return (
    <Container>
      <h3>基础用法（受控）</h3>
      <div className="meta">当前展开：{JSON.stringify(activeBasic)}</div>
      <LarkCollapse
        activeNames={activeBasic}
        onChange={(v) => {
          setActiveBasic(v);
          onChange(v);
        }}
      >
        <LarkCollapseItem name="1" title="标题 1">
          <div className="content">
            <p>这里是内容区。</p>
            <p>可以放任意内容，比如表单、按钮、提示等。</p>
          </div>
        </LarkCollapseItem>
        <LarkCollapseItem name="2" title="标题 2">
          <div className="content">
            <p>支持多行文本。</p>
            <p>也支持插槽中的任意组件。</p>
          </div>
        </LarkCollapseItem>
        <LarkCollapseItem name="3" title="标题 3">
          <div className="content">
            <p>第三项内容。</p>
          </div>
        </LarkCollapseItem>
      </LarkCollapse>

      <h3>手风琴模式（一次只展开一个）</h3>
      <div className="meta">当前展开：{JSON.stringify(activeAccordion)}</div>
      <LarkCollapse
        activeNames={activeAccordion}
        accordion
        onChange={(v) => {
          setActiveAccordion(v);
          onChange(v);
        }}
      >
        <LarkCollapseItem name="a" title="手风琴 A">
          <div className="content">
            <p>手风琴模式下，数组里通常只有 0 或 1 个值。</p>
          </div>
        </LarkCollapseItem>
        <LarkCollapseItem name="b" title="手风琴 B">
          <div className="content">
            <p>点击切换当前展开项。</p>
          </div>
        </LarkCollapseItem>
        <LarkCollapseItem name="c" title="手风琴 C">
          <div className="content">
            <p>第三项内容。</p>
          </div>
        </LarkCollapseItem>
      </LarkCollapse>

      <h3>禁用项</h3>
      <div className="meta">当前展开：{JSON.stringify(activeWithDisabled)}</div>
      <LarkCollapse
        activeNames={activeWithDisabled}
        onChange={(v) => {
          setActiveWithDisabled(v);
          onChange(v);
        }}
      >
        <LarkCollapseItem name="x" title="可展开项">
          <div className="content">
            <p>这项可以正常展开/收起。</p>
          </div>
        </LarkCollapseItem>
        <LarkCollapseItem name="y" title="禁用项（点击无效）" disabled>
          <div className="content">
            <p>这项被禁用，点击标题不会触发展开收起。</p>
          </div>
        </LarkCollapseItem>
      </LarkCollapse>
    </Container>
  );
}
