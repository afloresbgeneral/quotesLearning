export class SettingsService {
    private altBackground: Boolean = false;

    setBackGround(isAlt: Boolean) {
        this.altBackground = isAlt;
    }

    isAltBackground() {
        return this.altBackground;
    }

}