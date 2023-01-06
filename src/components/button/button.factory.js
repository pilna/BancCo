import { ButtonBuilder } from "./button.builder"
import Compass from "../../../assets/compass.svg"
import GlobeIcon from "../../../assets/globe.svg"
import PauseIcon from "../../../assets/pause.svg"
import PhotoIcon from "../../../assets/photo.svg"
import PinIcon from "../../../assets/pin.svg"

export class ButtonFactory {
  constructor() {}

  createGlobButton(onClick) {
    return new ButtonBuilder()
      .withIcon(<GlobeIcon width={36} height={36} />)
      .withOnClick(onClick)
      .build()
  }

  createCompassButton(onClick) {
    return new ButtonBuilder()
      .withIcon(<Compass width={36} height={36} />)
      .withOnClick(onClick)
      .build()
  }

  createPhotoButton(onClick) {
    return new ButtonBuilder()
      .withIcon(<PhotoIcon width={36} height={36} />)
      .withOnClick(onClick)
      .build()
  }

  createLiveTrackingButton(onClick) {
    return new ButtonBuilder()
      .withIcon(<PinIcon width={36} height={36} />)
      .withLabel("Live Tracking")
      .setLabelOrientation("right")
      .setFontWeight("bold")
      .setFontSize(16)
      .setWidth(160)
      .withOnClick(onClick)
      .build()
  }

  createPauseTrackingButton(onClick) {
    return new ButtonBuilder()
      .withIcon(<PauseIcon width={36} height={36} />)
      .withOnClick(onClick)
      .setIconColor("#FFA300")
      .build()
  }

  createSubmitButton(text, onClick, backgroundColor) {
    return new ButtonBuilder()
      .withLabel(text)
      .withOnClick(onClick)
      .setFullWidth()
      .setBackgroundColor(backgroundColor || "#4C8C2C")
      .setLabelColor("#fff")
      .setFontWeight("bold")
      .setFontSize(16)
      .build()
  }

  createTextButton(text, onClick, backgroundColor) {
    return new ButtonBuilder()
      .withLabel(text)
      .withOnClick(onClick)
      .setFullWidth()
      .setBackgroundColor(backgroundColor || "#fff")
      .setLabelColor("#fff")
      .setFontSize(14)
      .setBorderRadius(3)
      .build()
  }
}