import Link from "next/link";

type link = {
  title: string;
  path?: any;
};

type IProps = {
  links: link[];
};

const Title: React.FC<IProps> = ({ links }) => {
  const index = links.length - 1;

  return (
    <>
    
    <div className="py-3">
      <div className="flex flex-wrap">
        {links.length > 1 &&
          links.map((link) =>
            link.path ? (
              <span className="text-black mr-1">
                <Link href={link.path} className="hover:underline ml-1">
                  {link.title}
                </Link>
                /
              </span>
            ) : (
              <p className="text-primary mr-1">{link.title}</p>
            )
          )}
      </div>

      <h1 className="page-name">
        {links[index].title}
      </h1>
    </div>
    </>
  );
};

export default Title;
