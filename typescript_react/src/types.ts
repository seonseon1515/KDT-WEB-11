// interface를 중복 작성하지 않기 위해
// 여러 파일에서 공통적으로 사용하는 타입을 관리
// tsx 확장자랑 ts 확장자 차이?

export default interface TodoItemProps {
  id: number;
  text: string;
  completed: boolean;
}

export default interface Post {
  userId:number;
  id:number;
  title:string;
  body:string;
}