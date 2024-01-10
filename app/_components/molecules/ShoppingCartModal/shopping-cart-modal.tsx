import { ShoppingCartItem } from "@/app/_lib/definitions";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
} from "@nextui-org/react";
import React from "react";
import ShoppingCardItem from "@/app/_components/atoms/ShoppingCartItem/shopping-card-item";

export default function ShoppingCartModal({
  items,
  isOpen,
  onOpenChange,
  handleRemove,
}: {
  items: ShoppingCartItem[];
  isOpen: boolean;
  onOpenChange: () => void;
  handleRemove: (product: ShoppingCartItem) => void;
}) {
  return (
    <Modal isOpen={isOpen} placement="top" onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalBody>
              {items.map((item, index) => (
                <ShoppingCardItem
                  key={index}
                  item={item}
                  removeItem={handleRemove}
                />
              ))}
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
              <Button color="primary" onPress={onClose}>
                Checkout
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
