import { Ad } from "../types";
import { paths } from "@/routes/paths";
import { adjustPrice } from "@/shared/utils/adjustPrice";
import Image from "next/image";
import Link from "next/link";

type IProps = {
  ad: Ad;
  isPinned?: boolean;
  superCategoryId: number;
  superCategoryName: string;
  subCategoryId: number;
  subCategoryName: string;
};

const AdCard: React.FC<IProps> = ({
  ad,
  isPinned = false,
  superCategoryId,
  superCategoryName,
  subCategoryId,
  subCategoryName,
}) => {
  return (
    <div className="card-cont">
      {isPinned && (<Image src="/pin.png" alt="pinned_ads" width="25" height="25" className="absolute top-15 left-15" />)}
      <Link href={paths.getAd(superCategoryId, superCategoryName, subCategoryId, subCategoryName, ad.id)} >
        <div className="card-img">
          <Image src={ad.image} width="0" height="0" sizes="100vw" className="w-full object-cover max-h-40 h-40" alt={ad.title} />
        </div>
        <div className="card-text">
          <h4 className="card-name">{ad.cat}</h4>
          <h3 className="card-title">{ad.title}</h3>
          <h3 className="card-price">{adjustPrice(ad.price)}</h3>
          {/* <p className="huge">dddd</p> */}
        </div>

      </Link>
    </div>
  );
};

export default AdCard;
