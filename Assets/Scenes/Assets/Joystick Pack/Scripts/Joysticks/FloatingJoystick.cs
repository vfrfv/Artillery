using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.EventSystems;

public class FloatingJoystick : Joystick
{
    [SerializeField] private bool isFloating = true; // Можно включать/выключать плавающий режим
    [SerializeField] private RectTransform joystickArea; // Область для зацепа (например, левая половина экрана)
    private Vector2 startPosition;

    protected override void Start()
    {
        base.Start();
        startPosition = background.anchoredPosition; // Запоминаем исходное положение джойстика
    }

    public override void OnPointerDown(PointerEventData eventData)
    {
        if (isFloating)
        {
            // Проверяем, попадает ли касание в зону джойстика
            if (RectTransformUtility.RectangleContainsScreenPoint(joystickArea, eventData.position))
            {
                background.position = eventData.position; // Перемещаем джойстик к точке касания
            }
        }
        base.OnPointerDown(eventData);
    }

    public override void OnPointerUp(PointerEventData eventData)
    {
        base.OnPointerUp(eventData);
        if (isFloating)
        {
            background.anchoredPosition = startPosition; // Возвращаем джойстик на место
        }
    }
}