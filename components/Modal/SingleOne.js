import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Slide from "@mui/material/Slide";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import useWindowSize from "../../components/hooks/windowSize";
import { AiOutlineQuestionCircle } from "react-icons/ai";
export default function TransitionsModal({ heading,text }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { width } = useWindowSize();
  const style = {
    position: "absolute",
    top: width > 500 ? "40%" : "30%",
    left: width > 500 ? "25%" : "4%",
    width: width > 500 ? "50%" : "92%",
    bgcolor: "background.paper",
    boxShadow: 24,
    borderRadius: 1,
  };
  return (
    <div>
      <Button onClick={handleOpen} style={{ backgroundColor: "transparent" }}>
        <AiOutlineQuestionCircle className="text-lime-500 text-2xl cursor-pointer" />
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
      >
        <Slide in={open}>
          <Box sx={style}>
            <div className="bg-[#EDEDED] text-[#747474] px-4 md:px-4 py-2 md:py-3 font">
              {heading}
            </div>
            <div className="px-4 md:px-4 py-4 md:py-5 text-[#535353] font-light">
              {text}
            </div>
          </Box>
        </Slide>
      </Modal>
    </div>
  );
}
