// export default function VideoPlayer(props) {
//     const { id } = useParams();
//     const [isPlaying, setIsPlaying] = useState(false);
  
//     useEffect(() => {
//       setIsPlaying(true);
//     }, []);
  
//     return (
//       <div>
//         {isPlaying && (
//           <iframe
//             width="853"
//             height="480"
//             src={`https://www.youtube.com/embed/${id}`}
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//             title="Embedded youtube"
//           />
//         )}
//       </div>
//     );
//   }