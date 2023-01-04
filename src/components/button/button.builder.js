import Button from './button'

export class ButtonBuilder {
  constructor() {
    this.props = {}
  }

  withIcon(icon) {
    this.props.icon = icon
    return this
  }

  withLabel(label) {
    this.props.label = label
    return this
  }

  setIconColor(color) {
    this.props.iconColor = color
    return this
  }

  setIconSize(size) {
    this.props.iconSize = size
    return this
  }

  setLabelColor(color) {
    this.props.labelColor = color
    return this
  }

  withOnClick(onClick) {
    this.props.onClick = onClick
    return this
  }

  setLabelOrientation(orientation) {
    this.props.labelOrientation = orientation
    return this
  }

  setWidth(width) {
    this.props.width = width
    return this
  }

  setFontWeight(weight) {
    this.props.fontWeight = weight
    return this
  }

  setFontSize(size) {
    this.props.fontSize = size
    return this
  }

  setFullWidth() {
    this.props.fullWidth = true
    return this
  }

  setBackgroundColor(color) {
    this.props.backgroundColor = color
    return this
  }

  build() {
    return (
      <Button {...this.props} />
    )
  }
}