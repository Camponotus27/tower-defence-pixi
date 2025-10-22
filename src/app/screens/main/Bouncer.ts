import { Torre } from "./Torre";
import type { MainScreen } from "./MainScreen";

export class Bouncer {
  private static readonly LOGO_COUNT = 3;
  private static readonly ANIMATION_DURATION = 1;
  private static readonly WAIT_DURATION = 0.5;

  public screen!: MainScreen;

  private allLogoArray: Torre[] = [];
  private activeLogoArray: Torre[] = [];
  private yMin = -200;
  private yMax = 200;
  private xMin = -300;
  private xMax = 300;

}
