"use client";

import { XMarkIcon } from "@heroicons/react/24/outline";
import { Dialog, DialogHeader, DialogBody } from "@material-tailwind/react";

import { useDispatch, useSelector } from "react-redux";

import { toggleQrCodeModal } from "@/redux/slice/modalsSlice";

import QRCodeGenerator from "../QRCodeGenerator";

const QrModal = () => {
  const dispatch = useDispatch();

  const open = useSelector((state) => state.modals.openQrCode);

  const handleOpen = () => {
    dispatch(toggleQrCodeModal(!open));
  };

  return (
    <Dialog open={open} size="xs" handler={handleOpen} className="bg-gray-900">
      <DialogHeader className="flex items-center justify-between text-white">
        <h3 className="mb-1">Your QR Code</h3>

        <XMarkIcon
          className="h-6 w-6 cursor-pointer"
          onClick={() => dispatch(toggleQrCodeModal(false))}
        />
      </DialogHeader>

      <DialogBody className="text-center">
        <p className="-mt-7 mb-6 max-w-[70%] text-left text-sm text-gray-300">
          Write the Address and a Connect message to send request.
        </p>

        <QRCodeGenerator value="https://www.example.com" />
      </DialogBody>
    </Dialog>
  );
};

export default QrModal;
