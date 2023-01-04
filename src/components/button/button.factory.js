import { ButtonBuilder } from "./button.builder"
import compass from "../../../assets/compass.svg"
import globeIcon from "../../../assets/globe.svg"
import pauseIcon from "../../../assets/pause.svg"
import photoIcon from "../../../assets/photo.svg"
import pinIcon from "../../../assets/pin.svg"

export class ButtonFactory {
  constructor() {}

  createGlobButton(onClick) {
    return new ButtonBuilder()
      .withIcon(globeIcon)
      .withOnClick(onClick)
      .build()
  }

  createCompassButton(onClick) {
    return new ButtonBuilder()
      .withIcon(compass)
      .withOnClick(onClick)
      .build()
  }

  createPhotoButton(onClick) {
    return new ButtonBuilder()
      .withIcon(photoIcon)
      .withOnClick(onClick)
      .build()
  }

  createLiveTrackingButton(onClick) {
    return new ButtonBuilder()
      .withIcon(pinIcon)
      .withLabel("Live Tracking")
      .setLabelOrientation("right")
      .setFontWeight("bold")
      .setFontSize(16)
      .withOnClick(onClick)
      .build()
  }

  createPauseTrackingButton(onClick) {
    return new ButtonBuilder()
      .withIcon(pauseIcon)
      .withOnClick(onClick)
      .setIconColor("#FFA300")
      .build()
  }

  createSubmitButton(text, onClick) {
    return new ButtonBuilder()
      .withLabel(text)
      .withOnClick(onClick)
      .setFullWidth()
      .setBackgroundColor("#4C8C2C")
      .setLabelColor("#fff")
      .setFontWeight("bold")
      .setFontSize(16)
      .build()
  }
}