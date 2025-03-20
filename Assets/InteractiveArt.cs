using UnityEngine;

public class InteractiveArt : MonoBehaviour
{
    [SerializeField] private GameObject _shopping;
    [SerializeField] private TitnSprite _arm;

    public Camera secondCamera; 

    void Update()
    {
        if (Input.GetMouseButtonDown(0)) 
        {
            Ray ray = secondCamera.ScreenPointToRay(Input.mousePosition); 
            RaycastHit hit; 

            if (Physics.Raycast(ray, out hit)) 
            {
                if (hit.collider != null)
                {
                    _shopping.SetActive(true);
                    _arm.gameObject.SetActive(false);
                }
            }
        }
    }
}
