import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      marginTop: theme.spacing(2),
    },
    table: {
      minWidth: 650,
    },
    tableSpace: {
      marginTop: 20,
    },
  })
);

function Home() {
  const classes = useStyles();

  return (
    <div>
      <Container className={classes.container} maxWidth="md">
        <h1 style={{ textAlign: "center" }}>ระบบบันทึกการจองใช้ห้อง </h1>
        <h4><u>Requirements</u></h4>
        <p>
        ระบบการจองใช้บริการห้องของบริษัท Room Booking เป็นระบบที่ให้สมาชิกระบบจองใช้ห้อง 
        ที่เป็นสมาชิกเท่านั้น Log in เข้าระบบเพื่อทำการจองห้องตามที่สมาชิกต้องการ เช่น ห้องเรียน ห้องปฏิบัติการ 
        หรือห้องอ่านหนังสือ โดยจะมีการบันทึกการจองใช้ห้องของสมาชิกระบบจองห้องที่ใช้บริการ ได้แก่ ข้อมูลการจองใช้บริการ 
        วันที่ เวลา รวมถึงจำนวนผู้เข้าใช้งานในห้องที่จองไว้ ทั้งนี้สมาชิกระบบจองห้องสามารถจองล่วงหน้าได้ภายในสัปดาห์นั้น ๆ 
        และมี รายการอาหารว่างเพิ่มเติม
	    ระบบบันทึกการจองใช้ห้อง เป็นระบบที่ให้สมาชิกระบบจองห้องต้อง Log in เพื่อทำเลือกห้อง ระบุวันเวลาที่ต้องการจองใช้ห้อง 
        ซึ่งระบบจะทำการบันทึกข้อมูลการจองใช้ห้องโดยอัตโนมัติเมื่อสมาชิกระบบจองห้องได้กดยืนยันข้อมูลแล้ว

        </p>
        <br />
        <h4><u>User Story</u> (ระบบบันทึกการจองใช้ห้อง )</h4>
        <p> 
          <b>ในบทบาทของ</b>	สมาชิกระบบจองใช้ห้อง<br />
          <b>ฉันต้องการ</b>	ให้ระบบสามารถบันทึกข้อมูลการจองใช้ห้องได้<br />
          <b>เพื่อ</b>	 เก็บข้อมูลบันทึกการจองใช้ห้องของสมาชิกระบบจองใช้ห้อง<br />
        </p>
      </Container>
    </div>
  );
}
export default Home;