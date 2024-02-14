export interface ItemCategory {
   mainShortcutId: number;
   title: string;
   sort: number;
   imageUrl: string;
   linkUrl: string;
   creator: string;
   updater: string;
   deleter: string | null;
   createdAt: string;
   updatedAt: string;
   deletedAt: string | null;
}

export interface Banner {
   mainBannerId: number;
   title: string;
   sort: number;
   pcImageUrl: string;
   mobileImageUrl: string;
   linkUrl: string;
   startDate: string;
   endDate: string;
   creator: string;
   updater: string;
   deleter: string | null;
   createdAt: string;
   updatedAt: string;
   deletedAt: string | null;
}

export interface Media {
   seq: number;
   type: string;
   uri: string;
   mimeType: string;
   deviceType: any;
}

export interface Discount {
   id: number;
   name: null;
   type: string;
   calcMethod: string;
   value: number;
   activeFrom: null;
   activeTo: null;
   qty: number;
   remain: null;
}

export interface PriceInfo {
   price: number;
   discountPrice: number;
   discountRate: number;
}

export interface Publication {
   id: number;
   title: string;
   code: string;
   productId: number;
   prdType: number;
   offeringType: string;
   rating: number;
   isExistResidual: boolean;
   isAdult: number;
   preface: string;
   prefaceIconUrl: string;
   productName: string;
   brandName: string;
   media: Media[];
   isTrial: boolean;
   tagsOnImage: string[];
   tagsOnDesc: string[];
   priceInfo: PriceInfo;
   discounts: Discount[];
   applyCoupon: boolean;
}

export interface Product {
   createdAt: string;
   updatedAt: string;
   deletedAt: null;
   uuid: string;
   name: string;
   body: null;
   collectionId: number;
   key: string;
   seq: number;
   entityType: string;
   entityId: number;
   optionKey: null;
   publication: Publication;
   prdType: number;
}

export interface Category {
   id: number;
   type: string;
   code: string;
   title: string;
   subtitle: string;
   description: string;
   trialPeriod: null;
   installmentPrice: null;
   installmentPeriod: null;
   rating: number;
   startDate: null;
   endDate: null;
   viewType: string;
   createdAt: string;
   items: Product[];
}
