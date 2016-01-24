/* <applet code="movingBanner" height=50 width=300> </applet> */

import java.awt.*;
import java.applet.*;

publicclass movingBanner extends Applet implements Runnable
{
      String msg=" My Multimedia Website ";
      char ch;
      boolean  stopFlag= true;
      Thread t= null;
     
      publicvoid start(){
          t = new Thread(this);
          stopFlag=false;
          t.start();
       }

       publicvoid run(){
             for(;;){
                 try{
                repaint();
                Thread.sleep(250);
                ch = msg.charAt(0);
                msg = msg.substring(1,msg.length());
                msg = msg + ch;
                if(stopFlag)
                     break;
                }catch(InterruptedException e) {}
            }
        }

       publicvoid stop(){
           stopFlag=true;
           t = null;
         }

         publicvoid paint(Graphics g){
              g.drawString(msg,60,30);
        }
}