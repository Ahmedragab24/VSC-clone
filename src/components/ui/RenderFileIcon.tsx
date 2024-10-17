import { FilesIcon } from "lucide-react";
import FileIcon from "./FileIcon";
import { extensionIconPaths } from "../../constant";

interface IProps {
  fileName: string;
  isFolder?: boolean;
  isOpenFolder?: boolean;
}

const RenderFileIcon = ({ fileName, isFolder, isOpenFolder }: IProps) => {
  const extension = fileName.split(".").pop();

  if (
    extension &&
    Object.prototype.hasOwnProperty.call(extensionIconPaths, extension)
  ) {
    const iconPath = isFolder
      ? isOpenFolder
        ? `${extensionIconPaths[extension]}-open.svg`
        : `${extensionIconPaths[extension]}.svg`
      : `${extensionIconPaths[extension]}.svg`;

    return <FileIcon src={iconPath} alt={"Icon"} />;
  }

  // Default Folder
  if (isFolder)
    return isOpenFolder ? (
      <FileIcon src={`/icons/folder-default-open.svg`} alt={"Icon"} />
    ) : (
      <FileIcon src={`/icons/folder-default.svg`} alt={"Icon"} />
    );

  return <FilesIcon />;
};

export default RenderFileIcon;
