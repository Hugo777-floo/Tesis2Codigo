export interface ImageData {
    src: string;
    alt: string;
    description: string;
  }
  
  export interface ModalProps {
    images: ImageData[];
    onClose: () => void;
  }
  