interface Iprops {
  src: string;
  alt: "Icon";
  className?: string;
}

const FileIcon = ({ src, alt, className = "w-6 h-6" }: Iprops) => {
  return <img src={src} alt={alt} className={className} />;
};

export default FileIcon;
