import { ReactNode } from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

interface Iprops {
  defaultLayout?: number[] | undefined;
  leftPanel: ReactNode;
  rightPanel: ReactNode;
  showLeftPanel: boolean;
}

const ResizeablePanel = ({
  defaultLayout = [33, 67],
  leftPanel,
  rightPanel,
  showLeftPanel,
}: Iprops) => {
  const onLayout = (sizes: number[]) => {
    document.cookie = `react-resizable-panel:layout=${JSON.stringify(sizes)}`;
  };

  return (
    <PanelGroup
      autoSaveId="condition"
      direction="horizontal"
      onLayout={onLayout}
    >
      {showLeftPanel && (
        <>
          <Panel defaultSize={defaultLayout[0]} collapsible>
            {leftPanel}
          </Panel>
          <PanelResizeHandle className="border-r-2 border-[#ffffff1f]" />
        </>
      )}
      <Panel defaultSize={defaultLayout[1]}>{rightPanel}</Panel>
    </PanelGroup>
  );
};

export default ResizeablePanel;
